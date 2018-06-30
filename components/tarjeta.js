import React from 'react'


export default class extends React.Component {

    constructor(props) {
      super(props)
      this.state = {

      }
    }
    
    render() {
      return (
        <div>
            <div className='tarjeta-container'>
                <div className='tarjeta-body'>
                    <h1>34</h1>
                </div>
                <div className='tarjeta-footer'>
                    <a href='https://twitter.com/lasdesistemas' target='blank'>
                        <img className='lasdesistemas' src='/static/assets/img/logos/lasdesistemas.png' alt='[LAS] de sistemas' />
                    </a>
                </div>
            </div>
            <style jsx>{`
            .tarjeta-container {
                width:400px;
                height:1000px;
            }
            .tarjeta-body {
                background-color: #FFF;
                margin: 0 10px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                height: 60%;
            }
            .tarjeta-container .tarjeta-body > h1 {
                position: relative;
                top: 50%;
                float: left;
            }
            .border-row {
                border-bottom: 1px solid #da536f;
            }
            .tarjeta-footer {
                background-color: #FFF;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 0 10px;
                padding: 15px 5px 5px;
            }
            .lasdesistemas {
                height: 50px;
                margin-right: 10px;
            }
            `}</style>
    </div>
  )}

}