const initialState = {
    projects : [
        {id : 1, title: 'can u write the test?', content: 'the test involves writing lot '},
        {id : 2, title: 'can u write the work?', content: 'the test involves writing lot '},
        {id : 3, title: 'can u write the exam', content: 'the test involves writing lot '}
    ]
}
const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT' :
            console.log('created' , action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.err);
            return state;
        default:
            return state;
        }


}
export default projectReducer

