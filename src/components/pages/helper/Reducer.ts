export default (state: object, action: any) => {
  switch (action.type) {
    case "submit":
      return { ...state }
    case "typing":
      return { ...state, text: action.payload }
    case "searches":
      return { ...state, searches: [action.payload] }
    case "user":
      return { ...state, user: [action.payload] }
    case "users":
      return { ...state, searchedUsers: action.payload }
    case "commits":
      return { ...state, commits: [action.payload] }
    case "isLoading":
      return { ...state, loading: true }
    case "loaded":
      return { ...state, loading: false }
    case "repos":
      return { ...state, repos: [action.payload] }
    case "starred":
      return { ...state, starred: [action.payload] }
    case "nav":
      return { ...state, nav: !state.nav }
    case "storage":
      return { ...state, storage: action.payload }
    case "error":
      return { ...state, errorMessage: action.payload }
  }
}
