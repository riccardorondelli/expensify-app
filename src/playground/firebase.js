// child_removed
database.ref("expenses").on("child_removed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref("expenses").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').push({
  description: 'rent',
  note: 'may',
  amount: '35000',
  createdAt: 1000
});

database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
    });
  });
  console.log(expenses);
});

setTimeout(() => {
  database.ref('expenses/-M36VHzhv4YdeT5cC936/amount').set(75000);
}, 3500);

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

const jobTitle = database.ref('job/title').on('value', (snapshot) => {
    console.log(snapshot.val());
});

const jobCompany = database.ref('job/company').on('value', (snapshot) => {
  console.log(snapshot.val());
});

const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

setTimeout(() => {
  database.ref('age').set(28);
}, 3500);

setTimeout(() => {
  database.ref('age').off(onValueChange);
}, 3500);

setTimeout(() => {
  database.ref('age').set(28);
}, 3500);

database.ref('location/city')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data', e);
  });

database.ref().set({
  name: 'Riccardo Rondelli',
  age: 29,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  location: {
    city: 'Torino',
    country: 'Italia'
  }
}).then(() => {
  console.log('Data is saved');
}).catch((e) => {
  console.log('This failed.', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Roma'
});

database.ref('isSingle').remove()
.then(() => {
  console.log('Data is removed')
})
.catch((e) => {
  console.log('Failed to retrieve data', e)
});
