# react-native-fully-customizable-papple-dropdown
A fully custom react-native dropdown by "PappleThemes" where you have complete access over font size, font color, position of the dropdown, height and width of dropdown and also the overlay color.

# Usage

import PappleDropDown from 'react-native-fully-customizable-papple-dropdown'

    <PappleDropDown
        showDropDown={this.state.showDropDownYear}
        openCloseDropDown={this.openCloseDropDown.bind(this)}
        selectedValue={this.state.selectedYear}
        dropDownData={this.state.dropDownDataYear}
        onSelectItem={this.onSelectItem.bind(this)}
        buttonContainerStyle={styles.buttonContainerStyle}
        dropDownContainerStyle={styles.dropDownContainerStyleYear}
        singleCellStyle={styles.singleCellStyle}
        textStyle={styles.dropDownTextStyle}
        overlayStyle={styles.overlayStyle}
    />







# showDropDown
    Control to show/ hide your dropdown

# openCloseDropDown
    function to control show and hide dropdown   

# selectedValue
   value selected from the dropdwon   

# dropDownData
    data of dropdown

# onSelectItem   
    select function of dropdown

# buttonContainerStyle
    Gives style for click area on which dropdown should appear. If not provided will take default value

# dropDownContainerStyle
    Gives style to position of dropdown and its height and width

# singleCellStyle
    Gives style for dropdown single cell. If not provided will take default value

# dropDownTextStyle
    Gives style for the text inside the dropdown container. If not provided will take default value

# overlayStyle    
    Gives style to overlay background. You can make it transparent depending upon your requirement