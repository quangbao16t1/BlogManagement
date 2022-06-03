import './ProfilePage.css'
import girlImg from './girl.jpg';

const ProfilePage = () => {
    return (
        <div className="clearfix">
        <div className="row">
            <div className="col-md-4 animated fadeIn" >
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={girlImg}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    Nguyen quang Bao
                  </h5>
                  <p className="card-text">
                   Quang nam
                    <br />
                    <span className="phone">12345333</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
        <button
          className="btn btn-light btn-block w-50 mx-auto"
        >
          Load More Users
        </button>
      </div>
    )
}

export default ProfilePage;