const ExponentThree = ({count}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">{count} * {count} * {count} = <span className="total">{Math.pow(count, 3)}</span></p>
  </div>
);

export default ExponentThree;