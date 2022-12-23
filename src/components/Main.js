//import React, { Component } from 'react';

//import moment from 'moment'

const Main = () => {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '512px' }}>
                <h2 className="text-white text-monospace bg-dark">Share File</h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.mediaDescription.value
                    //this.props.uploadMedia(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            className="form-control text-monospace"
                            placeholder="description..."
                            required />
                      </div>
                    <input type="file" onChange={() => console.log('changed') } className="text-white text-monospace"/>
                    <button type="submit" className="btn-primary btn-block"><b>Upload!</b></button>
                  </form>
              </div>
            </div>
          </main>
        </div>
    </div>
    );
  }

export default Main;
