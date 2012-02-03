builder.sel2.docs = {
  "get": {
    "params": {
      "url": "The URL to go to."
    },
    "description": "Navigate to the given URL."
  },
  "refresh": {
    "description": "Refresh page."
  },
  "goBack": {
    "description": "Go back a page."
  },
  "goForward": {
    "description": "Go forward a page."
  },
  "close": {
    "description": "End Selenium script."
  },
  "print": {
    "params": {
      "text": "The text to print."
    },
    "description": "Prints out the given text."
  },
  "store": {
    "params": {
      "variable": "The name of the variable to store the text in.",
      "text": "The text to store in the variable."
    },
    "description": "Stores the given text in the given variable."
  },
  "clickElement": {
    "params": {
      "locator": "How to find the element to be clicked."
    },
    "description": "Click an element on the current page."
  },
  "clickElementWithOffset": {
    "params": {
      "locator": "How to find the element to be clicked.",
      "offset": "Location of the click relative to the element, formatted as \"x, y\"."
    },
    "description": "Click an element on the current page, with the click offset by a certain amount."
  },
  "sendKeysToElement": {
    "params": {
      "locator": "How to find the element to type into.",
      "text": "The text to type in."
    },
    "description": "Type text into an element on the current page."
  },
  "setElementSelected": {
    "params": {
      "locator": "How to find the element to select."
    },
    "description": "Select an element. If it's a check box or radio button, it will become ticked. If it's an option inside a &lt;select&gt;, that option will become the chosen one. If it's an option inside a multi-select, that option will be added to the selection."
  },
  "setElementNotSelected": {
    "params": {
      "locator": "How to find the element to de-select.",
    },
    "description": "Un-select an element. If it's a check box, it will become not ticked. If it's an option inside a multi-select, that option will be removed from the selection."
  },
  "clearSelections": {
    "params": {
      "locator": "How to find the select element to clear.",
    },
    "description": "Clears the selections in a multi-select element."
  },
  "submitElement": {
    "params": {
      "locator": "How to find the element whose form to submit.",
    },
    "description": "Submits the form the targeted element is a part of. The element does not have to be the submit button - it can be any field or the form itself."
  },
  "addCookie": {
    "params": {
      "name": "The cookie's name.",
      "value": "The value (content) of the cookie.",
      "options": "Cookie options. Format is path=[path],max_age=[max age in milliseconds]. Either or both options can be left out."
    },
    "description": "Creates a cookie for the current domain."
  },
  "deleteCookie": {
    "params": {
      "name": "The name of the cookie to be deleted.",
    },
    "description": "Deletes the cookie of the given name for the current domain."
  },
  "saveScreenshot": {
    "params": {
      "file": "The path to save the screenshot to."
    },
    "description": "Saves a screenshot of the current page, as a PNG image."
  },
  "assertCurrentUrl": {
    "params": {
      "url": "The URL we want to be at."
    },
    "description": "Asserts that the current URL is the given value. If this is not the case, script execution will stop and be marked as failed."
  },
  "verifyCurrentUrl": {
    "params": {
      "url": "The URL we want to be at."
    },
    "description": "Verifies that the current URL is the given value. If this is not the case, script execution will be marked as failed, but the script will continue running."
  },
  "waitForCurrentUrl": {
    "params": {
      "url": "The URL we want to be at."
    },
    "description": "Waits until the current URL is the given value."
  },
  "storeCurrentUrl": {
    "params": {
      "variable": "The name of the variable to store the URL in."
    },
    "description": "Stores the current URL in the given variable."
  },
  "assertTitle": {
    "params": {
      "title": "Title we want the current page to have."
    },
    "description": "Asserts that the current page has the given title. If this is not the case, script execution will stop and be marked as failed."
  },
  "verifyTitle": {
    "params": {
      "title": "Title we want the current page to have."
    },
    "description": "Verifies that the current page has the given title. If this is not the case, script execution will be marked as failed, but the script will continue running."
  },
  "waitForTitle": {
    "params": {
      "title": "Title we want the current page to have."
    },
    "description": "Waits for the current page to have the given title."
  },
  "storeTitle": {
    "params": {
      "variable": "Name of the variable to store the title into."
    },
    "description": "Stores the title of the current page in the given variable."
  },
  "assertText": {
    "params": {
      "locator": "How to find the element whose text to test.",
      "text": "The text we want the element to have."
    },
    "description": "Asserts that the given element contains exactly the given text. If this is not the case, script execution will stop and be marked as failed."
  },
  "verifyText": {
    "params": {
      "locator": "How to find the element whose text to test.",
      "text": "The text we want the element to have."
    },
    "description": "Verifies that the given element contains exactly the given text. If this is not the case, script execution will be marked as failed, but the script will continue running."
  },
  "waitForText": {
    "params": {
      "locator": "How to find the element whose text to test.",
      "text": "The text we want the element to have."
    },
    "description": "Waits for the given element containing exactly the given text."
  },
  "storeText": {
    "params": {
      "variable": "The name of the variable to store the element's text in.",
      "locator": "How to find the element whose text to store."
    },
    "description": "Stores an element's text content in the given variable."
  },
  "assertTextPresent": {
    "params": {
      "text": "The text we want to feature on the page."
    },
    "description": "Asserts that the given text is somewhere on the page. If this is not the case, script execution will stop and be marked as failed."
  },
  "verifyTextPresent": {
    "params": {
      "text": "The text we want to feature on the page."
    },
    "description": "Verifies that the given text is somewhere on the page. If this is not the case, script execution will be marked as failed, but the script will continue running."
  },
  "waitForTextPresent": {
    "params": {
      "text": "The text we want to feature on the page."
    },
    "description": "Waits for the given text to appear somewhere on the page."
  },
  "storeTextPresent": {
    "params": {
      "variable": "The name of the variable to store whether the given text is on the page.",
      "text": "The text to check."
    },
    "description": "Stores whether the given text is anywhere on the page in the given variable."
  },
  "assertBodyText": {
    "params": {
      "text": "The text we want the entire page to be."
    },
    "description": "Asserts that the text of the entire page body is as given. If this is not the case, script execution will stop and be marked as failed."
  },
  "verifyBodyText": {
    "params": {
      "text": "The text we want the entire page to be."
    },
    "description": "Verifies that the text of the entire page body is as given. If this is not the case, script execution will be marked as failed, but the script will continue running."
  },
  "waitForBodyText": {
    "params": {
      "text": "The text we want the entire page to be."
    },
    "description": "Waits for the text of the entire page body to be as given."
  },
  "storeBodyText": {
    "params": {
      "variable": "The name of the variable to store the page body text in."
    },
    "description": "Stores the page body text in the given variable."
  },
  "assertPageSource": {
    "params": {
      "source": "The expected page source."
    },
    "description": "Asserts that the current page's source is as given. If this is not the case, script execution will stop and be marked as failed."
  },
  "verifyPageSource": {
    "params": {
      "source": "The expected page source."
    },
    "description": "Verifies that the current page's source is as given. If this is not the case, script execution will be marked as failed, but the script will continue running."
  },
  "waitForPageSource": {
    "params": {
      "source": "The expected page source."
    },
    "description": "Waits for the page source to be as given."
  },
  "storePageSource": {
    "params": {
      "variable": "The name of the variable to store the page source in."
    },
    "description": "Stores the page source in the given variable."
  },
  "assertElementSelected": {
    "params": {
      "locator": "How to find the element."
    },
    "description": "Asserts that the given element is selected. If this is not the case, script execution will stop and be marked as failed."
  },
  "verifyElementSelected": {
    "params": {
      "locator": "How to find the element."
    },
    "description": "Verifies that the given element is selected. If this is not the case, script execution will be marked as failed, but the script will continue running."
  },
  "waitForElementSelected": {
    "params": {
      "locator": "How to find the element."
    },
    "description": "Waits for an element to be selected."
  },
  "storeElementSelected": {
    "params": {
      "variable": "Name of the variable to store the attribute value in.",
      "locator": "How to find the element."
    },
    "description": "Stores whether the element is selected in the given variable."
  },
  "assertElementAttribute": {
    "params": {
      "locator": "How to find the element.",
      "attributeName": "The name of the attribute to check.",
      "value": "The value we want the attribute to have."
    },
    "description": "Asserts that an element's attribute has a specific value. If this is not the case, script execution will stop and be marked as failed."
  },
  "verifyElementAttribute": {
    "params": {
      "locator": "How to find the element.",
      "attributeName": "The name of the attribute to check.",
      "value": "The value we want the attribute to have."
    },
    "description": "Verifies that an element's attribute has a specific value. If this is not the case, script execution will be marked as failed, but the script will continue running."
  },
  "waitForElementAttribute": {
    "params": {
      "locator": "How to find the element.",
      "attributeName": "The name of the attribute to check.",
      "value": "The value we want the attribute to have."
    },
    "description": "Waits for an element's attribute to assume a specific value."
  },
  "storeElementAttribute": {
    "params": {
      "variable": "Name of the variable to store the attribute value in.",
      "locator": "How to find the element.",
      "attributeName": "The name of the attribute to store."
    },
    "description": "Stores an element's attribute in the given variable."
  },
  "assertElementValue": {
    "params": {
      "locator": "How to find the element.",
      "value": "The value we want the element to have."
    },
    "description": "Asserts that an element's value is as given. If this is not the case, script execution will stop and be marked as failed."
  },
  "verifyElementValue": {
    "params": {
      "locator": "How to find the element.",
      "value": "The value we want the element to have."
    },
    "description": "Verifies that an element's value is as given. If this is not the case, script execution will be marked as failed, but the script will continue running."
  },
  "waitForElementValue": {
    "params": {
      "locator": "How to find the element.",
      "value": "The value we want the element to have."
    },
    "description": "Waits for an element's value to become the given one."
  },
  "storeElementValue": {
    "params": {
      "variable": "The name of the variable to store the element's value in.",
      "locator": "How to find the element."
    },
    "description": "Stores an element's value in the given variable."
  },
  "assertCookiePresent": {
    "params": {
      "name": "The cookie's name."
    },
    "description": "Asserts that a cookie with the given name is present. If this is not the case, script execution will stop and be marked as failed."
  },
  "verifyCookiePresent": {
    "params": {
      "name": "The cookie's name."
    },
    "description": "Verifies that a cookie with the given name is present. If this is not the case, script execution will be marked as failed, but the script will continue running."
  },
  "waitForCookiePresent": {
    "params": {
      "name": "The cookie's name."
    },
    "description": "Waits for a cookie with the given name to be present."
  },
  "storeCookiePresent": {
    "params": {
      "variable": "The name of the variable where to store whether the cookie exists.",
      "name": "The cookie name."
    },
    "description": "Stores whether a cookie with the given name exists."
  },
  "assertCookieByName": {
    "params": {
      "name": "The cookie's name.",
      "value": "The value (content) the cookie is expected to have."
    },
    "description": "Asserts that a cookie with the given name is present. If this is not the case, script execution will stop and be marked as failed."
  },
  "verifyCookieByName": {
    "params": {
      "name": "The cookie's name.",
      "value": "The value (content) the cookie is expected to have."
    },
    "description": "Verifies that a cookie with the given name is present. If this is not the case, script execution will be marked as failed, but the script will continue running."
  },
  "waitForCookieByName": {
    "params": {
      "name": "The cookie's name.",
      "value": "The value (content) the cookie is expected to have."
    },
    "description": "Waits for a cookie with the given name and value to be present."
  },
  "storeCookieByName": {
    "params": {
      "variable": "The name of the variable to store the cookie's value in.",
      "name": "The cookie's name."
    },
    "description": "Stores the value (content) of the cookie with the given name in a variable."
  }
};