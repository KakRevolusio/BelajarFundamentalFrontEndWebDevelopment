import '../component/list.js';
import '../component/search.js';
import '../component/header.js';
import '../component/footer.js';
import DataSource from '../data/api.js';
 
const main = () => {
   const searchElement = document.querySelector("search-bar");
   const mealListElement = document.querySelector("custom-list");
 
   const onButtonSearchClicked = async () => {
       try {
           const result = await DataSource.searchMeal(searchElement.value);
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
   const renderResult = results => {
       mealListElement.meals = results;
   };
 
   const fallbackResult = message => {
       mealListElement.renderError(message);
   };
 
   searchElement.clickEvent = onButtonSearchClicked;
    
};
 
export default main;