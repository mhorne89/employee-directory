/*
* RxJS: EmployeesReducer
*
* In RxJS, the state is stored in a single object. A Reducer is used to 'reduce' the state object
* and return only the data we wish to use. 
* 
* This Reducer stores the employees collection. It is used my any component which needs to access,
* store or edit the employees data.
* 
* This Reducer also uses the localStorage to store/retrieve the data so it is not lost when the page
* is refreshed.
*/

export function employees(state, action) {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      localStorage.setItem('amorelie-employees', JSON.stringify(action.payload));
      return action.payload;
    default:
      return JSON.parse(localStorage.getItem('amorelie-employees'));
  }
};
