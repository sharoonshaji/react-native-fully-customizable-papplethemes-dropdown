import React from 'react'
import {
    Text, View, TouchableOpacity, StyleSheet, Image,
    FlatList, TouchableWithoutFeedback, Modal, Dimensions,
} from 'react-native'
import PropTypes from 'prop-types'

const { width, height } = Dimensions.get('window')
const Metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
}

class PappleDropDown extends React.Component {

    static propTypes = {
        showDropDown: PropTypes.bool,
        selectedValue: PropTypes.string,
        openCloseDropDown: PropTypes.func,
        buttonContainerStyle: PropTypes.StyleSheet,
        dropDownContainerStyle: PropTypes.StyleSheet,
        overlayStyle: PropTypes.StyleSheet,
        dropDownData: PropTypes.array,
        singleCellStyle: PropTypes.StyleSheet,
        textStyle: PropTypes.StyleSheet,
        onSelectItem: PropTypes.func,
        addDropDownImage: PropTypes.bool,
        dropdownImage: PropTypes.Image,
        dropdownImageStyle: PropTypes.StyleSheet
    }



    renderSeparatorView = () => {
        return (
            <View style={styles.seperator} />
        );
    };




    dropDownList(rowDatas: object, sectionID: number, rowID: number) {
        const { singleCellStyle, textStyle, onSelectItem } = this.props
        var rowData = rowDatas.item;
        return (
            <View style={[styles.dDListMainContainer, singleCellStyle]}>
                <TouchableOpacity style={styles.dDListInnerContainer}
                    onPress={onSelectItem.bind(this, rowData)}>
                    <Text style={(textStyle) ? textStyle : styles.textStyle}>{rowData}</Text>
                </TouchableOpacity>
            </View>
        )
    }




    chooseDropDownModal() {
        const { showDropDown, openCloseDropDown, overlayStyle,
            dropDownContainerStyle, dropDownData } = this.props
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={showDropDown}
            >
                <TouchableWithoutFeedback onPress={() => openCloseDropDown()}>
                    <View style={[styles.dDModalOverlay, overlayStyle]} />
                </TouchableWithoutFeedback>
                <View style={styles.dDModalContent}>
                    <View style={[styles.dDModalContainer, dropDownContainerStyle]}>
                        <FlatList
                            ref="dropDown"
                            showsHorizontalScrollIndicator={false}
                            data={dropDownData}
                            renderItem={this.dropDownList.bind(this)}
                            ItemSeparatorComponent={this.renderSeparatorView}
                        />
                    </View>
                </View>
            </Modal>
        )
    }



    render() {
        const { selectedValue, buttonContainerStyle, dropdownImage,
            openCloseDropDown, addDropDownImage, dropdownImageStyle } = this.props
        return (
            <TouchableOpacity style={[styles.dDMainContainer, buttonContainerStyle]}
                onPress={() => openCloseDropDown()}>
                <Text style={styles.dropdownText}>{selectedValue}</Text>
                {(addDropDownImage ===true) ?
                    <Image source={dropdownImage} style={dropdownImageStyle} /> :
                    <Text>&#9660;</Text>}
                {this.chooseDropDownModal()}
            </TouchableOpacity>
        )
    }
}



const styles = StyleSheet.create({
    dDMainContainer: {
        height: Metrics.screenHeight / 15,
        width: Metrics.screenWidth / 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    dropdownText: {
        color: 'black',
        fontSize: Metrics.screenWidth / 28,
    },
    dropdownArrow: {
        height: Metrics.screenWidth / 28,
        width: Metrics.screenWidth / 28,
        left: Metrics.screenWidth / 50,
    },
    dDModalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    dDModalContent: {
        flex: 1,
    },
    dDModalContainer: {
        height: Metrics.screenHeight / 1.9,
        width: Metrics.screenWidth / 2.02,
        top: Metrics.screenHeight / 3.74,
        backgroundColor: 'white',
        zIndex: 10,
        shadowColor: 'white',
        shadowOpacity: 1,
        elevation: 10,
        shadowRadius: 20,
        shadowOffset: { width: 5, height: 18 },
        borderBottomLeftRadius: Metrics.screenWidth / 40,
        borderBottomRightRadius: Metrics.screenWidth / 40,
    },
    seperator: {
        height: 1,
        width: '100%',
        backgroundColor: "#CEDCCE",
    },
    dDListMainContainer: {
        height: Metrics.screenHeight / 11.5,
        width: Metrics.screenWidth / 2.02,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dDListInnerContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'black',
        fontSize: Metrics.screenWidth / 28,
    },
})

export default PappleDropDown;


