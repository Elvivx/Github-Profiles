export default (state, action) => {
  switch (action.type) {
    case "submit":
      return { ...state }
    case "typing":
      return { ...state, text: action.payload }
    case "savedSearches":
      return { ...state, recentSearches: action.payload }
    case "searches":
      return state.recentSearches.includes(state.text) ? { ...state } : { ...state, recentSearches: [...state.recentSearches, state.text] }
    case "recentClick":
      return { ...state, text: action.payload }
    case "user":
      return { ...state, user: action.payload }
    case "users":
      return { ...state, users: action.payload }
    case "curUser":
      return { ...state, curUser: action.payload }
    case "commits":
      return { ...state, commits: action.payload }
    case "isLoading":
      return { ...state, loading: true }
    case "loaded":
      return { ...state, loading: false }
    case "repos":
      return { ...state, userRepos: action.payload }
    case "starred":
      return { ...state, userStarreds: action.payload }
    case "nav":
      return { ...state, nav: action.payload }
    case "btnNav":
      return { ...state, btnNav: !state.btnNav }
    case "theme":
      return { ...state, theme: action.payload }
    case "storage":
      return { ...state, storage: action.payload }
    case "removeRecentSearch":
      return { ...state, recentSearches: state.recentSearches.filter((item: string) => item !== action.payload) }
    case "searchError":
      return { ...state, searchErrorMessage: action.payload }
    case "repoError":
      return { ...state, reposErrorMessage: action.payload }
    case "starredError":
      return { ...state, starredErrorMessage: action.payload }
  }
}
