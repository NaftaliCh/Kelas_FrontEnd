import helloWorld from './helloWorld.js';
import ambilDataUser from './ambilDataUser.js';
import ambilDataUserAsync from './ambilDataUserAsync.js';

// Function untuk menjalankan promise di helloWorld.js
async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();

// Function untuk menjalankan ambilDataUser() di ambilDataUser.js
ambilDataUser()
  .then((data) => {
    console.log(data.data); 
  })
  .catch((error) => {
    console.error("Terjadi kesalahan:", error);
  });

// Function untuk menjalankan ambilDataUserAsync() di ambilDataUserAsync.js
(async () => {
  try {
    const data = await ambilDataUserAsync();
    console.log(data.data); 
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
})();
