// Write your code here.
import './index.css'

const Technology = props => {
  const {cardsList} = props

  const {title, className, description, imgUrl} = cardsList
  return (
    <div>
      <div className="bg-card">
        <h1>Learn 4.0 Technology</h1>
        <p>
          Google's mission is to organize the world's information and make
          <br /> it universally accessible and useful. That's why Search makes
          it easy to discover
          <br /> a broad range of information from a wide variety of sources.
        </p>
        <div>
          <div className={`card-1 ${className}`}>
            <div className="profile-card">
              <h1 className="heading">{title}</h1>
              <p className="para">{description}</p>
              <div className="image">
                <img src={imgUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Technology
