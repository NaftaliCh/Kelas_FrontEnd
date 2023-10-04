async function ambilDataUserAsync() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      console.log(data.data); 
      return data;
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      throw error;
    }
  }
  
  export default ambilDataUserAsync;
  