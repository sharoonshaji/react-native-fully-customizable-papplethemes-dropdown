
# react-native-fully-customizable-papplethemes-dropdown
A fully custom react-native dropdown by "PappleThemes" for both Android & iOS where you have complete access over font size,
font color, position of the dropdown, height and width of dropdown, dropdown image and also the overlay color.

## Features
- Pure JS.
- Compatible with both iOS and Android.
- Highly customizable.
- Same type of appearance in both iOS and Android
- Control over font size, font family, font color.
- Control over dropdown height, width and position.
- Control over overlay color.
- Control over dropdown image.
- Control over dropdown image style. 
- Multiple dropdowns supported.

## Demo
![screenshot](https://user-images.githubusercontent.com/35957307/89143389-0971f600-d568-11ea-973b-db8f7c46941f.jpg)


## Installation
```sh
npm i react-native-fully-customizable-papplethemes-dropdown
```

## Usage
Import this module:
```javascript
import PappleDropDown from 'react-native-fully-customizable-papplethemes-dropdown'
```
### Basic Usage
```javascript

import PappleDropDown from 'react-native-fully-customizable-papplethemes-dropdown'

this.state = {
    showDropDownMonth: false,
        selectedMonth: 'Select month',
        dropDownData: ['January', 'February', 'March', 'April', 'May', 'June']
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

<PappleDropDown
    showDropDown={true}
    openCloseDropDown={this.openCloseDropDown.bind(this)}
    selectedValue={this.state.selectedMonth}
    dropDownData={this.state.dropDownData}
    onSelectItem={this.onSelectItem.bind(this)}
/>
```



### Props
Prop                    | Type     | Optional |    Default      | Description
------------------------| -------- | -------- | --------------- | -----------
`showDropDown`          | bool     | Yes      | false           | show/hide dropdown component.
`selectedValue`         | string   | No       | Please select   | selectedValue has the value which we just selected.
`dropDownData`          | array    | No       | [ ]             | data for dropdown.
`openCloseDropDown`     | function | No       |                 | control open or close dropdown.
`onSelectItem`          | function | No       |                 | select an option from dropdown.
`addDropDownImage`      | bool     | Yes      | false           | if given true, you can add your own dropdown arrow image.
`dropdownImage`         | function | Yes      |                 | path to dropdown image.    
`buttonContainerStyle`  | style    | Yes      |                 | style for click area on which dropdown should appear.        
`dropDownContainerStyle`| style    | Yes      |                 | style for position, height and width of dropdown.
`singleCellStyle`       | style    | Yes      |                 | style for dropdown single cell.
`dropDownTextStyle`     | style    | Yes      |                 | style for the text inside the dropdown container.
`overlayStyle `         | style    | Yes      | rgba(0,0,0,0.1) | style to overlay background.
`dropdownImageStyle`    | style    | Yes      |                 | style for dropdown arrow.




