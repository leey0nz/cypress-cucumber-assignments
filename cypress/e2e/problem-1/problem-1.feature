Feature: Form submission
    Background: Access Page
        Given I open the form page

    #Scenario 1: Can fill in all fields and submit successfully
    Scenario: Can fill in all fields and submit successfully
        When I fill in all required fields
        And I select "Printing" from the Services field
        And I select "Prospect" from the Association field
        And I click the "Submit" button
        Then the form should be submitted successfully

    #Scenario 2: Cannot submit with all required fields empty, shows error
    Scenario: Cannot submit with all required fields empty, shows error
        When I leave all fields empty
        And I click the "Submit" button
        Then I should see error messages for all required fields

    # Scenario 3: Shows error message for invalid email format
    Scenario: Shows error message for invalid email format
        When I enter "invalid-email" in the "Email" field
        And I fill in other required fields without invalid-email field
        And I click the "Submit" button
        Then I should see an error message for invalid email format

    #Scenario 4: Can submit form with valid required fields and optional fields empty
    Scenario: Can submit form with valid required fields and optional fields empty
        When I enter a valid email
        And I fill in other required fields without valid-email field
        And I leave optional fields empty
        And I click the "Submit" button
        Then the form should be submitted successfully

    #Scenario 5: Can fill in partial required fields and see an error message
    Scenario: Can fill in partial required fields and see an error message
        When I fill in only the "Email" field
        And I leave the "Last Name" and "First Name" fields empty
        And I click the "Submit" button
        Then I should see an error message for the missing "Last Name and First Name" required fields

    #Scenario 6: Submit button is enabled if required fields are empty
    Scenario: Submit button is enabled if required fields are empty
        When I leave required fields empty
        Then the "Submit" button should be enabled

    #Scenario 7: Check if required fields show an asterisk symbol
    Scenario: Check if required fields show an asterisk symbol
        Then the "Email" , "Last Name", "First Name", "About US","Services of Interest", "Type of Association" field should display a red asterisk symbol

    #Scenario 8: Radio button retains selected value after form submission
    Scenario: Radio button retains selected value after form submission
        When I select "Printing" from the radio buttons
        And I click the "Submit" button
        Then the "Printing" radio button should remain selected

    #Scenario 9: Can submit form with optional fields empty
    Scenario: Can submit form with optional fields empty
        When I fill in all required fields without optional field
        And I leave the optional "Explanation" field empty
        And I click the "Submit" button
        Then the form should be submitted successfully

    #Scenario 10: User can submit checkboxes multiple times before submission
    Scenario: User can change checkboxes multiple times before submission
        When I select "Advertisement" from the checkboxes
        And I change the selection to "Logistics"
        And I change the selection to "Printing"
        And I fill in all required fields after change multiple time checkboxes
        Then the final selected value in the checkboxes should be "Printing"
        And I click the "Submit" button
        And the form should be submitted successfully

    #Scenario 11: Can select all checkboxes and change around radio buttons submit successfully
    Scenario: Can select all checkboxes and change around radio buttons submit successfully
        When I select all checkboxes in "Services of Interest"
        And I select change around radio buttons in "Type of Association"
        And I fill in all required fields with all checkboxes and radio buttons
        And I click the "Submit" button
        Then the form should be submitted successfully