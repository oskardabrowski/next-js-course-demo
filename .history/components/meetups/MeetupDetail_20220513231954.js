function MeetupDetail(props) {
  return (
    <Fragment>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>Some street 5, 12345 Some city</address>
      <p>The meetup desc</p>
    </Fragment>
  );
}

export default MeetupDetail;
