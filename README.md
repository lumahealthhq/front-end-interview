1. Assumptions I made:
- Input fields are fixed, meaning there won't be cases where some patient form has a different fields from other forms. For example, patient A form has a field "Smoking history" but patient B form doesn't.
- Always expand the patient form if it is the only form in the list.
- Remove the "Add another patient" button if we've already added 5 patients.
- Auto collapse every card when adding a new patient, except for the one just added.
- Maintain the expand/collapse state of other cards if 1 card is deleted.
- The card header is updated as user enters their first and last name.
- Do not allow collapse the card if it's the only one.
- Do not allow delete the card if it's the only one.

2. What I would have done if given more time:
- Make "Contact Language" field a dropdown so users can select which language they want.
- Adjust the font-family in the input fields to be the same with the specs. For some reason, I couldn't figure out how to override it.
- Make sure Voice Over (Mac), NVDA/JAWS (Windows) work appropriately for accessibility.
- Get the form data in a cleaner way. Right now I'm just traversing the DOM to get those info. I couldn't figure out how you could pass data from each form to the App component (grandfather component).
- Add validity check for each input to make sure they are valid. For example, 'hello' can't be a valid phone number. 
- Put comments/js doc for functions.
- Add js unit tests and webdriver tests.
- Do not update the card header title if patient's name string is empty, which means, leave it as "New Referral".
- Added a snackbar/toast when users submits the form, either with success or failure, with different snackbar colors and messages to distinguish the two.
