import styles from './styles';
import PropTypes from "prop-types";
import { reviewModel } from '@models';
import { MainLayout } from '@layouts';
import { notification } from '@helpers';
import { AuthContext } from '@contexts/AuthContext';
import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const ReviewShop = ({ route, navigation }) => {
  const { store } = route.params.param;

  if (!store) {
    notification('store not found', 'Error');
    return navigation.replace('Dashboard');
  }

  const { userData, loading, ethernet, setLoading } = useContext(AuthContext);
  const [state, setState] = useState({
    reviews: [],
    userReview: {},
    isReviewed: false
  });

  const handleState = (name, value) => {
    setState((prevValues) => ({ ...prevValues, [name]: value }));
  }

  useEffect(() => {
    (async () => {
      try {
        if (!ethernet.isInternetReachable) return notification('Tidak ada koneksi internet', 'Error');
  
        const allReview = await reviewModel.getReview(store.id);
        if (!allReview) return;

        const sortedReviews = allReview.sort((a, b) => {
          if (a.email == userData.email) return -1;
          if (b.email == userData.email) return 1;
          return 0;
        });
    
        handleState("reviews", sortedReviews);

        const userReview = await reviewModel.findReview(userData.email);
        if (!userReview) return;
  
        handleState("isReviewed", true);
        handleState("userReview", userReview);


      } catch (error) {
        notification(`Error while get review data ${error}`, "Error");
        console.log(`Error while get review data: ${error}`);
      }
    })()
  }, [])

  const handleReview = () => {
    if (state.isReviewed) navigation.navigate("EditReviewShop", { param: { review: state.userReview, store: store } });
    else navigation.navigate("AddReviewShop", { param: { store: store } });
  }

  return (
    <MainLayout containerStyle={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.replace('DetailShop', { param: { store: store } })}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.screenTitle}>Review Shop</Text>

        {userData.role == "user" && (
          <TouchableOpacity onPress={handleReview} disabled={loading}>
            <Text style={styles.saveButton}>{state.isReviewed ? "Edit" : "Add"} Review</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView style={{ flex: 1 }}>
        {(state.reviews && state.reviews.length > 0) ? (state.reviews.map((review) => (
          <View style={styles.shopCard}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.shopTitle}>{review.email} {review.email == userData.email && (
                <Text style={styles.shopTitle}>(You)</Text>
              )}</Text>
            </View>

            <Text style={styles.shopDetail}>{review.description}</Text>

            <View style={styles.starCard}>
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={faStar}
                  size={27}
                  color={star <= review.rating ? '#000' : '#ccc'}
                  style={styles.starIcon}
                />
              ))}
            </View>
          </View>
        ))) : (
          <View style={styles.shopCard}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.shopNoReview}>There is no review</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </MainLayout>
  )
}

ReviewShop.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

ReviewShop.defaultProps = {
  route: {
    params: {
      param: {
        store: {}
      }
    }
  },
  navigation: {
    replace: () => {},
    navigate: () => {}
  },
};

export default ReviewShop;
