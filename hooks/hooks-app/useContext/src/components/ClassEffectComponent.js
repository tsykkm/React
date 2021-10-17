import React, {Component} from 'react'

// hooksを使う前のサンプル
class ClassEffectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        document.title = `クリック数：${this.state.count}回`;
    }
    
    componentDidUpdate() {
        document.title = `クリック数：${this.state.count}回`;
    }

    render() {
        return (
            <div>
                <p>・Class Component Sample</p>
                <p>クリック数{this.state.count}回</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    カウント
                </button>
            </div>
        )
    }
}

export default ClassEffectComponent
