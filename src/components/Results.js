const Result =(props)=> {
  return(
    <div>
      {props.results.cityName && <div>{props.results.cityName}</div>}
      {props.results.country && <div>{props.results.country}</div>}
      {props.results.temperature && <div>{props.results.temperature}<span>℃</span></div>}
      {props.results.conditionText &&
        <div>
          <img src={props.results.icon} alt="icon" />
          <span>{props.results.conditionText}</span>
        </div>
      }
      {props.results.localTime && <div>{props.results.localTime}</div>}
    </div>
  );
};

export default Result;