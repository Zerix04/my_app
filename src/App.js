

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Gambar from './images/images.jpg'
import './App.css'


function Kartu(props) {
  return (

    <>
      <div className="card mx-auto mt-4" >
        <img src={Gambar} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.namabarang} </h5>
          <p className="text-danger">{props.harga}</p>
          <p className="text-danger">jenis pembayaran : {props.jenispembayaran}</p>






          <hr />


        </div>


      </div>
    </>


  );
}










class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "Zerix",
      namabarang: "Axioo",
      harga: 20000000,
      jenispembayaran: "COD,DANA,OVO,SHOPPE PAY,MANDIRI,BRI,SPAY,GOJEK",
      jumlah: 0,
      total: 0

    }
  }


  tambah = () => {
    this.setState({

      jumlah: this.state.jumlah + 1,
      total: this.state.harga * (this.state.jumlah + 1)

    })
  }
  kurang = () => {
    if (this.state.jumlah > 0)
      this.setState({
        jumlah: this.state.jumlah - 1,
        total: this.state.harga * (this.state.jumlah - 1)
      })
  }


  render() {
    return (
      <>
        {/* < h1> {this.state.nama}</h1>
        <button onClick={ this.ubah_state}>ubah</button> */}
        <Kartu namabarang={this.state.namabarang} harga={this.state.harga} jenispembayaran={this.state.jenispembayaran} />
        <div className='row mx-auto  '>

          <div className='col-4 text-center'>
            <button className='btn btn-secondary text-light  ' onClick={this.kurang}>-</button>
          </div>

          <div className='col-4 text-center '>
            <h3>{this.state.jumlah}</h3>
          </div>

          <div className='col-4 text-center'>
            <button className='btn btn-success ' onClick={this.tambah}>+</button>
          </div>

        </div>

        <h4 className='text text-center'>TOTAL BAYAR : {this.state.total}</h4>




      </>

    );
  }
}

export default App;