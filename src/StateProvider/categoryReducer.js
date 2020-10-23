const initState = {
    categories: [],
    loading: false,
    error: null
};


const buildNewCategories = (parentId, categories, category) => {
    let myCategories = [];

    if(parentId == undefined){
        return [
            ...categories,
            {
                _id: category._id,
                name: category.name,
                slug: category.slug,
                children: []
            }
        ];
    }
    
    for(let cat of categories){

        if(cat._id == parentId){
            myCategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, [...cat.children, {
                    _id: category._id,
                    name: category.name,
                    slug: category.slug,
                    parentId: category.parentId,
                    children: category.children
                }], category) : []
            });
        }else{
            myCategories.push({
                ...cat,
                children: cat.children ? buildNewCategories(parentId, cat.children, category) : []
            });
        }   
    }


    return myCategories;
}


function categoryReducer(state = initState, action){
    switch(action.type){
        case "GET_ALL_CATEGORIES_REQUEST":
            return { loading: true };
        case "GET_ALL_CATEGORIES_SUCCESS":
            return { loading: false, categories: action.payload };
        case "GET_ALL_CATEGORIES_FAILURE":
            return { loading: false, error: action.payload };
        case "ADD_NEW_CATEGORY_REQUEST":
            state = {
                ...state,
                loading: true
            }
            break;
        case "ADD_NEW_CATEGORY_SUCCESS":
            const category = action.payload.category;
            const updatedCategories = buildNewCategories(category.parentId, state.categories, category);
            console.log('updated categoires', updatedCategories);
            
            state = {
                ...state,
                categories: updatedCategories,
                loading: false,
            }
            break;
        case "ADD_NEW_CATEGORY_FAILURE":
            state = {
                ...initState
            }
            break;
    }
    return state;
}

export default categoryReducer;