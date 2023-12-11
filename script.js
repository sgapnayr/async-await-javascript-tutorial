const dummyData = {
  userId: 1,
  userName: "Pags",
};

async function getUserData() {
  console.log("RUN LINE 7");
  console.log("RUN LINE 8");
  const data = await getDataFromDataBase();
  showDataOnFrontEnd(data);
}

function dummyHttpReq() {
  console.time();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dummyData);
      console.timeEnd();
    }, 2000);
  });
}

function showDataOnFrontEnd(data) {
  console.log("User Id: ", data.userId);
  console.log("User Name: ", data.userName);
}

getUserData();
