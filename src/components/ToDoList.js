import ReactStars from "react-rating-stars-component";
import Avatar from "react-avatar";

const fakeData = [
  {
    name: "Colosseum",
    image:
      "https://images.pexels.com/photos/397431/pexels-photo-397431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location:
      "https://www.google.com/maps/place/Colosseum/@41.8902102,12.4922309,5z/data=!4m9!1m2!2m1!1sThe+Colosseum!3m5!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309!15sCg1UaGUgQ29sb3NzZXVtWg8iDXRoZSBjb2xvc3NldW2SARNoaXN0b3JpY2FsX2xhbmRtYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU56Y3kxVWQzWlJSUkFC4AEA",
    rate: 4,
  },
  {
    name: "Pantheon",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNq6CDa-SYbgCt6loiuef6JimdSAi-sdCuQ-FVJ=w408-h293-k-no",
    location:
      "https://www.google.com/maps/place/Pantheon/@41.8986147,12.4726457,17z/data=!3m1!4b1!4m5!3m4!1s0x132f604f678640a9:0xcad165fa2036ce2c!8m2!3d41.8986108!4d12.4768729",
    rate: 3,
  },
  {
    name: "Pantheon",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNq6CDa-SYbgCt6loiuef6JimdSAi-sdCuQ-FVJ=w408-h293-k-no",
    location:
      "https://www.google.com/maps/place/Pantheon/@41.8986147,12.4726457,17z/data=!3m1!4b1!4m5!3m4!1s0x132f604f678640a9:0xcad165fa2036ce2c!8m2!3d41.8986108!4d12.4768729",
    rate: 3,
  },
  {
    name: "Pantheon",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNq6CDa-SYbgCt6loiuef6JimdSAi-sdCuQ-FVJ=w408-h293-k-no",
    location:
      "https://www.google.com/maps/place/Pantheon/@41.8986147,12.4726457,17z/data=!3m1!4b1!4m5!3m4!1s0x132f604f678640a9:0xcad165fa2036ce2c!8m2!3d41.8986108!4d12.4768729",
    rate: 3,
  },
  {
    name: "Pantheon",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNq6CDa-SYbgCt6loiuef6JimdSAi-sdCuQ-FVJ=w408-h293-k-no",
    location:
      "https://www.google.com/maps/place/Pantheon/@41.8986147,12.4726457,17z/data=!3m1!4b1!4m5!3m4!1s0x132f604f678640a9:0xcad165fa2036ce2c!8m2!3d41.8986108!4d12.4768729",
    rate: 3,
  },
  {
    name: "Pantheon",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNq6CDa-SYbgCt6loiuef6JimdSAi-sdCuQ-FVJ=w408-h293-k-no",
    location:
      "https://www.google.com/maps/place/Pantheon/@41.8986147,12.4726457,17z/data=!3m1!4b1!4m5!3m4!1s0x132f604f678640a9:0xcad165fa2036ce2c!8m2!3d41.8986108!4d12.4768729",
    rate: 3,
  },
  {
    name: "Pantheon",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNq6CDa-SYbgCt6loiuef6JimdSAi-sdCuQ-FVJ=w408-h293-k-no",
    location:
      "https://www.google.com/maps/place/Pantheon/@41.8986147,12.4726457,17z/data=!3m1!4b1!4m5!3m4!1s0x132f604f678640a9:0xcad165fa2036ce2c!8m2!3d41.8986108!4d12.4768729",
    rate: 3,
  },
  {
    name: "Pantheon",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNq6CDa-SYbgCt6loiuef6JimdSAi-sdCuQ-FVJ=w408-h293-k-no",
    location:
      "https://www.google.com/maps/place/Pantheon/@41.8986147,12.4726457,17z/data=!3m1!4b1!4m5!3m4!1s0x132f604f678640a9:0xcad165fa2036ce2c!8m2!3d41.8986108!4d12.4768729",
    rate: 3,
  },
  {
    name: "Pantheon",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNq6CDa-SYbgCt6loiuef6JimdSAi-sdCuQ-FVJ=w408-h293-k-no",
    location:
      "https://www.google.com/maps/place/Pantheon/@41.8986147,12.4726457,17z/data=!3m1!4b1!4m5!3m4!1s0x132f604f678640a9:0xcad165fa2036ce2c!8m2!3d41.8986108!4d12.4768729",
    rate: 3,
  },
  {
    name: "The Colosseum",
    image:
      "https://images.pexels.com/photos/397431/pexels-photo-397431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location:
      "https://www.google.com/maps/place/Colosseum/@41.8902102,12.4922309,5z/data=!4m9!1m2!2m1!1sThe+Colosseum!3m5!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309!15sCg1UaGUgQ29sb3NzZXVtWg8iDXRoZSBjb2xvc3NldW2SARNoaXN0b3JpY2FsX2xhbmRtYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU56Y3kxVWQzWlJSUkFC4AEA",
    rate: 4,
  },
  {
    name: "The Colosseum",
    image:
      "https://images.pexels.com/photos/397431/pexels-photo-397431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location:
      "https://www.google.com/maps/place/Colosseum/@41.8902102,12.4922309,5z/data=!4m9!1m2!2m1!1sThe+Colosseum!3m5!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309!15sCg1UaGUgQ29sb3NzZXVtWg8iDXRoZSBjb2xvc3NldW2SARNoaXN0b3JpY2FsX2xhbmRtYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU56Y3kxVWQzWlJSUkFC4AEA",
    rate: 4,
  },
  {
    name: "The Colosseum",
    image:
      "https://images.pexels.com/photos/397431/pexels-photo-397431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location:
      "https://www.google.com/maps/place/Colosseum/@41.8902102,12.4922309,5z/data=!4m9!1m2!2m1!1sThe+Colosseum!3m5!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309!15sCg1UaGUgQ29sb3NzZXVtWg8iDXRoZSBjb2xvc3NldW2SARNoaXN0b3JpY2FsX2xhbmRtYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU56Y3kxVWQzWlJSUkFC4AEA",
    rate: 4,
  },
];

const ToDoList = (props) => {
  return (
    <section className="todo-list-item-wrapper">
      <h1>Top attractions</h1>
      {fakeData.map((data, index) => {
        return (
          <div key={`todo-list-item-${index}`} className="todo-list-item">
            <Avatar 
              className="todo-list-item-avatar"
              name="Neda Azizi"
              round={true}
              size={"5rem"}
              src={data.image}
            />
            <h2>{data.name}</h2>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              size={14}
              value={data.rate}
              edit={false}
              activeColor="#ffd700"
              classNames="todo-list-item-rating"
            />
            <button className="todo-list-item-btn">
              <span className="material-symbols-rounded">near_me</span>
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ToDoList;
