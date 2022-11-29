function makeFriendsList(friends) {
  // ваш код...
  let list=document.createElement('UL')
  for (let i=0;i<friends.length;i++)
  {
    let newLI=document.createElement('LI')
    newLI.innerHTML=friends[i].firstName + ' ' +friends[i].lastName
    list.append(newLI)
  }
  return list
  }