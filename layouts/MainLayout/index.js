import { useContext } from 'react';
import PropTypes from "prop-types";
import { Loader } from '@components';
import { View, SafeAreaView } from 'react-native';
import { AuthContext } from '@contexts/AuthContext';

const MainLayout = ({ containerStyle, enableLoader, children }) => {
  const { loading } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <View style={containerStyle}>
        {loading && enableLoader && <Loader />}
        {children}
      </View>
    </SafeAreaView>
  )
}

MainLayout.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  enableLoader: PropTypes.bool
};

MainLayout.defaultProps = {
  containerStyle: {},
  enableLoader: true
};

export default MainLayout;
