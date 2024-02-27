import { createTheme } from "@rneui/themed";

export const colors = {
  condofyWhite: "#ffffff",
  condofyDarkBlue1: "#18181B",
  condofyDarkBlue2: "#09090B",
  condofyGrey1: "#E4E4E7",
};

const theme = createTheme({
  components: {
    Button: {
      raised: true,
      titleStyle: {
        color: colors.condofyWhite,
      },
      containerStyle: {
        borderRadius: 6,
      },
      buttonStyle: {
        backgroundColor: colors.condofyDarkBlue1,
        borderRadius: 6,
        padding: 10,
      },
      disabledStyle: {
        backgroundColor: colors.condofyGrey1,
      },
    },
    Input: {
      placeholderTextColor: colors.condofyGrey1,
      inputContainerStyle: {
        borderBottomWidth: 0,
      },
      containerStyle: {
        paddingHorizontal: 0,
      },
      inputStyle: {
        borderRadius: 8,
        borderColor: colors.condofyGrey1,
        borderBottomWidth: 0,
        padding: 10,
        fontSize: 15,
        borderWidth: 2,
      },
      disabledInputStyle: {
        backgroundColor: colors.condofyGrey1,
      },
    },
    Text: {
      h4Style: {
        color: colors.condofyDarkBlue1,
        fontSize: 16,
      },
    },
  },
});

export default theme;
