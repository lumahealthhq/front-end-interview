# Luma Front End Engineering Interview

*For whoever created this test, congrats! You have great tv taste.* 

## Assumptions
- **Tests will be made manually after the development is complete**, if I were to go with TDD I would have used a combination of Jest, react-testing-library, Enzyme, and Cypress for a complete test suite but due to time constraints, I choose to proceed without tests.
- **That there will be no error when sending the referrals**, it's trivial to simply treat the error code from the response, but the design spec contains neither error screens nor alternative flows therefore I opted to not code this flow.
- **No need for branches**, I'm thinking of this as one feature therefore there is no need for other branches.
- **Desktop first**, I choose this path due to the design spec and the persona I thought would use this platform.

## Next Steps
*not in any particular order*
- Create numbered and colored headers for referrals
- Add input check for mandatory fields
- Change inputs to match design spec more precisely
- Make address field auto-fillable with Google API

*beyond this point are steps that may add to the project but are not on the design spec*
- Add select to the contact language to match supported/real languages
- Add mask to phone field
- Create better user feedback
- Responsiveness