import img1 from '../img/gallery/gallery-1.jpg'
import img2 from '../img/gallery/gallery-2.jpg'
import img3 from '../img/gallery/gallery-3.jpg'
import img4 from '../img/gallery/gallery-4.jpg'
import img5 from '../img/gallery/gallery-5.jpg'
import img6 from '../img/gallery/gallery-6.jpg'
import img7 from '../img/gallery/gallery-7.jpg'
import img8 from '../img/gallery/gallery-8.jpg'

export default function Gallery(params) {
  return (
    <section id="gallery" className="gallery">
    <div className="container">

      <div className="section-title">
        <h2>Gallery</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row g-0">

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
              <img src={img1} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
              <img src={img2} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
              <img src={img3} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
              <img src={img4} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
              <img src={img5} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
              <img src={img6} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
              <img src={img7} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-3 col-md-4">
          <div className="gallery-item">
              <img src={img8} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}