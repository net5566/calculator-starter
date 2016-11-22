import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      presult:0,
      preinput:0,
      preop:'=',
      showwhich:true
    };
  }

  resetState() {
    // TODO
    this.setState({ presult: 0 });
    this.setState({ preinput:0 });
    this.setState({ preop:'=' });
    this.setState({ showwhich:true });

  }

  show(b) {
    if(b) return this.state.presult;
    else return this.state.preinput;
  }

  getinput(c) {
    this.setState({ showwhich: false });
    this.setState({ preinput: this.state.preinput*10 + parseInt(c) });
  }

  do_op(op) {
      if(this.state.preop==='=') {
        if(op==='=') {}
        else {
          this.setState({ presult: this.state.preinput });
          this.setState({ preinput: 0 });
          this.setState({ showwhich:true });
          this.setState({ preop:op});
        }
      }
      else if(this.state.preop==='+') {
        this.setState({ presult: this.state.presult+this.state.preinput });
        this.setState({ preinput:0 } );
        this.setState({ showwhich:true });
        this.setState({ preop:op });
      }
      else if(this.state.preop==='-') {
        this.setState({ presult: this.state.presult-this.state.preinput });
        this.setState({ preinput:0 } );
        this.setState({ showwhich:true });
        this.setState({ preop:op });
      }
      else if(this.state.preop==='x') {
        this.setState({ presult: this.state.presult*this.state.preinput });
        this.setState({ preinput:0 } );
        this.setState({ showwhich:true });
        this.setState({ preop:op });

      }
      else if(this.state.preop==='÷') {
        this.setState({ presult: this.state.presult / this.state.preinput });
        this.setState({ preinput:0 } );
        this.setState({ showwhich:true });
        this.setState({ preop:op });
      }

  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.show(this.state.showwhich)}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton onClick={this.do_op.bind(this)} className="calc-operator">÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.getinput.bind(this)} className="calc-number">7</CalcButton>
            <CalcButton onClick={this.getinput.bind(this)} className="calc-number">8</CalcButton>
            <CalcButton onClick={this.getinput.bind(this)} className="calc-number">9</CalcButton>
            <CalcButton onClick={this.do_op.bind(this)} className="calc-operator">x</CalcButton>
          </div>
           <div className="calc-row">
            <CalcButton onClick={this.getinput.bind(this)} className="calc-number">4</CalcButton>
            <CalcButton onClick={this.getinput.bind(this)} className="calc-number">5</CalcButton>
            <CalcButton onClick={this.getinput.bind(this)} className="calc-number">6</CalcButton>
            <CalcButton onClick={this.do_op.bind(this)} className="calc-operator">-</CalcButton>
          </div>
           <div className="calc-row">
            <CalcButton onClick={this.getinput.bind(this)} className="calc-number">1</CalcButton>
            <CalcButton onClick={this.getinput.bind(this)} className="calc-number">2</CalcButton>
            <CalcButton onClick={this.getinput.bind(this)} className="calc-number">3</CalcButton>
            <CalcButton onClick={this.do_op.bind(this)} className="calc-operator">+</CalcButton>
          </div>
           <div className="calc-row">
            <CalcButton onClick={this.getinput.bind(this)} className="bigger-btn">0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton onClick={this.do_op.bind(this)} className="calc-operator">=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
