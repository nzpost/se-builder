/** Suite GUI code, mostly for managing the suite menu. */
builder.gui.suite = {};

builder.gui.suite.addScriptMenuItem = function(name, id, index, isSelected) {
  if (isSelected) {
    builder.gui.menu.addItemToSection('suite', 'scripts', name, 'script-' + id, function() {});
    builder.gui.menu.highlightItem('script-' + id);
  } else {
    builder.gui.menu.addItemToSection('suite', 'scripts', name, 'script-' + id, function() {
      builder.record.stopAll();
      builder.suite.switchToScript(index);
      builder.stepdisplay.update();
    });
  }
};

/** Updates display of the suite menu. */
builder.gui.suite.update = function() {
  if (builder.suite.getNumberOfScripts() > 1) {
    jQuery('#suite-panel').show();
    builder.gui.menu.showItem('suite-save');
    builder.gui.menu.showItem('suite-save-as');
    builder.gui.menu.showItem('suite-discard');
    builder.gui.menu.showItem('suite-removescript');
    
    builder.gui.menu.clearSection('suite', 'scripts');
    var scriptNames = builder.suite.getScriptNames();
    var selectedScriptIndex = builder.suite.getSelectedScriptIndex();
    for (var i = 0; i < scriptNames.length; i++) {
      builder.gui.suite.addScriptMenuItem(scriptNames[i], builder.suite.scripts[i].id, i, i === selectedScriptIndex);
    }
    
    if (builder.suite.path) {
      jQuery('#suite-save-as').show();
    } else {
      jQuery('#suite-save-as').hide();
    }
  } else {
    builder.gui.menu.clearSection('suite', 'scripts');
    jQuery('#suite-panel').hide();
    builder.gui.menu.hideItem('suite-save');
    builder.gui.menu.hideItem('suite-save-as');
    builder.gui.menu.hideItem('suite-discard');
    builder.gui.menu.hideItem('suite-removescript');
  }
};

/** @return Whether the suite can be exported. */
builder.gui.suite.canExport = function() {
  return builder.gui.suite.allSameSelenium() && builder.gui.suite.allSavedAsSame();
};

/** @return Whether all scripts have been saved in HTML format. */
builder.gui.suite.allSavedAsHTML = function() {
  for (var i = 0; i < builder.suite.scripts.length; i++) {
    if (!builder.suite.scripts[i].path) { return false; }
    if (builder.suite.scripts[i].path.where != 'local') { return false; }
    if (builder.suite.scripts[i].path.format.name !== "HTML") { return false; }
  }
  return true;
};

/** @return Whether all scripts have been saved in the same format. */
builder.gui.suite.allSavedAsSame = function() {
  var formatName = null;
  var whereName = null;
  for (var i = 0; i < builder.suite.scripts.length; i++) {
    if (!builder.suite.scripts[i].path) { return false; }
    if (!builder.suite.scripts[i].path.format.name) { return false; }
    if (formatName == null) {
      formatName = builder.suite.scripts[i].path.format.name;
    } else {
      if (formatName != builder.suite.scripts[i].path.format.name) { return false; }
    }
    if (whereName == null) {
      whereName = builder.suite.scripts[i].path.where;
    } else {
      if (whereName != builder.suite.scripts[i].path.where) { return false; }
    }
  }
  return true;
};

/** @return Whether all scripts are all in the same version. */
builder.gui.suite.allSameSelenium = function() {
  if (builder.suite.scripts.length == 0) { return true; }
  var version = builder.suite.scripts[0].seleniumVersion;
  for (var i = 0; i < builder.suite.scripts.length; i++) {
    if (builder.suite.scripts[i].seleniumVersion !== version) { return false; }
  }
  return true;
};

// Setup suite menus.
builder.registerPostLoadHook(function() {
  // Save the suite
  builder.gui.menu.addItem('suite', _t('menu_save_suite'), 'suite-save', function() {
    if (builder.gui.suite.canExport()) {
      builder.dialogs.exportsuite.show();
    }
  });
  
  // Discard button: discards unsaved changes in suite, if any. Returns to startup interface
  // to let user decide what to do next.
  builder.gui.menu.addItem('suite', _t('menu_discard_suite'), 'suite-discard', function() {
    if (!builder.suite.getSaveRequired() ||
        confirm(_t('lose_changes_warning')))
    {
      builder.record.stopAll();
      builder.gui.switchView(builder.views.startup);
      builder.suite.clearSuite();
      // Clear any error messages.
      jQuery('#error-panel').hide();
    }
  });
  
  // Record new script.
  builder.gui.menu.addItem('suite', _t('menu_record_new_script'), 'suite-recordscript', function() {
    builder.record.stopAll();
    builder.dialogs.record.show(jQuery('#dialog-attachment-point'));
  });
  
  // Add script from file.
  builder.gui.menu.addItem('suite', _t('menu_add_script_from_file'), 'suite-addscript', function() {
    builder.record.stopAll();
    builder.io.loadUnknownFile(/*addToSuite*/ true);
  });
  
  // Remove script from suite.
  builder.gui.menu.addItem('suite', _t('menu_suite_remove_script'), 'suite-removescript', function() {
    builder.record.stopAll();
    builder.suite.removeScript(builder.suite.getSelectedScriptIndex());
    builder.gui.menu.updateRunSuiteOnRC();
    builder.stepdisplay.update();
  });
  
  builder.gui.menu.addDivider('suite', 'suite-divider');
  builder.gui.menu.addSection('suite', 'scripts');
  
  // Depending on what the state of the scripts is, different options are available.
  builder.suite.addScriptChangeListener(function() {
    jQuery('#edit-suite-path').html("Suite: " + (builder.suite.path ? builder.suite.path.path : '[Untitled Suite]'));
    if (builder.suite.getSuiteSaveRequired()) {
      if (builder.gui.suite.canExport()) {
        jQuery('#suite-saverequired').show();
        jQuery('#suite-cannotsave-unsavedscripts').hide();
        jQuery('#suite-cannotsave-notallsel1').hide();
      } else {
        if (builder.gui.suite.allSameSelenium()) {
          jQuery('#suite-cannotsave-notallsel1').hide();
          if (builder.gui.suite.allSavedAsSame()) {
            jQuery('#suite-cannotsave-unsavedscripts').hide();
          } else {
            jQuery('#suite-cannotsave-unsavedscripts').show();
          }
        } else {
          jQuery('#suite-cannotsave-notallsel1').show();
        }
        jQuery('#suite-saverequired').hide();
      }
    } else {
      jQuery('#suite-cannotsave-unsavedscripts').hide();
      jQuery('#suite-cannotsave-notallsel1').hide();
      jQuery('#suite-saverequired').hide();
    }
  });
  
  builder.gui.suite.update();
  
  builder.suite.addScriptChangeListener(function() { builder.gui.suite.update(); });
});