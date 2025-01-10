// import React, { useState, useContext } from 'react';
// import {
//   View,
//   Text,
//   Platform,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
// } from 'react-native';
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';
// import ImagePicker from 'react-native-image-crop-picker';

// import storage from '@react-native-firebase/storage';
// import firestore from '@react-native-firebase/firestore';

// import {
//   InputField,
//   InputWrapper,
//   AddImage,
//   SubmitBtn,
//   SubmitBtnText,
//   StatusWrapper,
// } from '../styles/AddPost';

// import { AuthContext } from '../navigation/AuthProvider';

// const AddPostScreen: React.FC = () => {
//   const { user } = useContext(AuthContext) as { user: { uid: string } };

//   const [image, setImage] = useState<string | null>(null);
//   const [uploading, setUploading] = useState<boolean>(false);
//   const [transferred, setTransferred] = useState<number>(0);
//   const [post, setPost] = useState<string | null>(null);

//   const takePhotoFromCamera = () => {
//     ImagePicker.openCamera({
//       width: 1200,
//       height: 780,
//       cropping: true,
//     }).then((image) => {
//       const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
//       setImage(imageUri || null);
//     });
//   };

//   const choosePhotoFromLibrary = () => {
//     ImagePicker.openPicker({
//       width: 1200,
//       height: 780,
//       cropping: true,
//     }).then((image) => {
//       const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
//       setImage(imageUri || null);
//     });
//   };

//   const submitPost = async () => {
//     const imageUrl = await uploadImage();
//     console.log('Image Url: ', imageUrl);
//     console.log('Post: ', post);

//     if (user && post) {
//       firestore()
//         .collection('posts')
//         .add({
//           userId: user.uid,
//           post: post,
//           postImg: imageUrl,
//           postTime: firestore.Timestamp.fromDate(new Date()),
//           likes: null,
//           comments: null,
//         })
//         .then(() => {
//           console.log('Post Added!');
//           Alert.alert(
//             'Post published!',
//             'Your post has been published successfully!',
//           );
//           setPost(null);
//         })
//         .catch((error) => {
//           console.error('Error adding post to Firestore: ', error);
//         });
//     }
//   };

//   const uploadImage = async (): Promise<string | null> => {
//     if (image == null) {
//       return null;
//     }
//     const uploadUri = image;
//     let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

//     const extension = filename.split('.').pop();
//     const name = filename.split('.').slice(0, -1).join('.');
//     filename = `${name}${Date.now()}.${extension}`;

//     setUploading(true);
//     setTransferred(0);

//     const storageRef = storage().ref(`photos/${filename}`);
//     const task = storageRef.putFile(uploadUri);

//     task.on('state_changed', (taskSnapshot) => {
//       setTransferred(
//         Math.round((taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100),
//       );
//     });

//     try {
//       await task;
//       const url = await storageRef.getDownloadURL();
//       setUploading(false);
//       setImage(null);
//       return url;
//     } catch (e) {
//       console.error(e);
//       setUploading(false);
//       return null;
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <InputWrapper>
//         {image ? <AddImage source={{ uri: image }} /> : null}

//         <InputField
//           placeholder="What's on your mind?"
//           multiline
//           numberOfLines={4}
//           value={post || ''}
//           onChangeText={(content) => setPost(content)}
//         />
//         {uploading ? (
//           <StatusWrapper>
//             <Text>{transferred} % Completed!</Text>
//             <ActivityIndicator size="large" color="#0000ff" />
//           </StatusWrapper>
//         ) : (
//           <SubmitBtn onPress={submitPost}>
//             <SubmitBtnText>Post</SubmitBtnText>
//           </SubmitBtn>
//         )}
//       </InputWrapper>
//       <ActionButton buttonColor="#2e64e5">
//         <ActionButton.Item
//           buttonColor="#9b59b6"
//           title="Take Photo"
//           onPress={takePhotoFromCamera}>
//           <Icon name="camera-outline" style={styles.actionButtonIcon} />
//         </ActionButton.Item>
//         <ActionButton.Item
//           buttonColor="#3498db"
//           title="Choose Photo"
//           onPress={choosePhotoFromLibrary}>
//           <Icon name="md-images-outline" style={styles.actionButtonIcon} />
//         </ActionButton.Item>
//       </ActionButton>
//     </View>
//   );
// };

// export default AddPostScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   actionButtonIcon: {
//     fontSize: 20,
//     height: 22,
//     color: 'white',
//   },
// });
