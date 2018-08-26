import React, {Component} from 'react';
import { AutoComplete } from 'antd';

function onSelect(value) {
    console.log('onSelect', value);
}
class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };
    }
    componentWillMount()
    {

    }
    state = {
        dataSource: [],
    }
    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }
    render() {
        const { dataSource } = this.state;
        return(
            <div >

                <div style={{margin:'auto',marginTop:50, width:200,height:200}}>
                    <AutoComplete
                        dataSource={dataSource}
                        style={{ width: 200 }}
                        onSelect={onSelect}
                        onSearch={this.handleSearch}
                        placeholder="input here"
                    />
                </div>

            </div>
        )
    }
}
export default Search;