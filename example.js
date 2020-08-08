import React, { Component } from 'react'
import {
    View, Dimensions
} from 'react-native'
import PappleDropDown from 'react-native-fully-customizable-papplethemes-dropdown'

const { width, height } = Dimensions.get('window')
const Metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
}



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDropDownMonth: false,
            selectedMonth: 'Select month',
            dropDownData: ['January', 'February', 'March', 'April', 'May', 'June']
        }
    }

    openCloseDropDown() {
        this.setState({
            showDropDownMonth: !this.state.showDropDownMonth
        })
    }
    onSelectItem(selectedItem) {
        this.setState({
            selectedMonth: selectedItem,
            showDropDownMonth: !this.state.showDropDownMonth
        })
    }


    render() {
        return (
            <View style={styles.mainContainer} >
                <PappleDropDown
                    showDropDown={this.state.showDropDownMonth}
                    openCloseDropDown={this.openCloseDropDown.bind(this)}
                    selectedValue={this.state.selectedMonth}
                    dropDownData={this.state.dropDownData}
                    onSelectItem={this.onSelectItem.bind(this)}
                    buttonContainerStyle={styles.buttonContainerStyle}
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    singleCellStyle={styles.singleCellStyle}
                    textStyle={styles.dropDownTextStyle}
                    overlayStyle={styles.overlayStyle}
                    addDropDownImage={true}
                    dropdownImage={require('../../Images/common/dropDownArrow.png')}
                    dropdownImageStyle={styles.dropdownArrow}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    buttonContainerStyle: {
        height: Metrics.screenHeight / 15,
        width: Metrics.screenWidth / 2,
    },
    dropDownContainerStyle: {
        height: Metrics.screenHeight / 1.9,
        width: Metrics.screenWidth / 2,
        top: Metrics.screenHeight / 3.9,
    },
    singleCellStyle: {
        height: Metrics.screenHeight / 11.5,
        width: Metrics.screenWidth / 2.02,
    },
    dropDownTextStyle: {
        color: 'black',
        fontFamily: 'Montserrat-Regular',
        fontSize: Metrics.screenWidth / 28,
    },
    overlayStyle:{
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    dropdownArrow: {
        height: Metrics.screenWidth / 28,
        width: Metrics.screenWidth / 28,
        left: Metrics.screenWidth / 50,
    },
})


export default Home
