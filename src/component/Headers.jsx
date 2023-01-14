import "../assets/css/App.scss";
const Headers = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="boxs">
            <div className="pengantar">
              <h5>Sekolah Digital</h5>
              <h1>Minerva</h1>
              <p>
                Minerva merupakan kursus online secara Private yang bertujuan
                untuk membantu proses pembelajaran dengan harga yang sangat
                terjangkau, dan penyampaian mater yang mudah dipahami.
              </p>
            </div>
            <div className="card">
              <div className="card-item">
                <p>Member</p>
                <div className="kotak">
                  <h1>5</h1>
                </div>
              </div>
              <div className="card-item">
                <p>Jam</p>
                <div className="kotak">
                  <h1>40</h1>
                </div>
              </div>
              <div className="card-item">
                <p>Kelas</p>
                <div className="kotak">
                  <h1>4</h1>
                </div>
              </div>
            </div>
            <div className="btn-join">
              <div className="btn">Gabung!</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Headers;
