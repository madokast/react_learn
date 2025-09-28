import React from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const style = {
    width: user.imageSize,
    height: user.imageSize
}

export default function A01DisplayData() {
    // img 渲染为
    // <img class="avatar" alt="Photo of Hedy Lamarr" src="https://i.imgur.com/yXOvdOSs.jpg" style="width: 90px; height: 90px;">
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={style}
      />
    </div>
  );
}