export const loadUsersAction = async (page: number) => {

  try {
    // const { data } = await fetch(`https://reqres.in/api/users?page=${page}`)
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=5&page=${page}`);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error)
    return []
  }
}
