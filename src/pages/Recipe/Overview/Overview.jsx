import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import saveIcon from '../../../assets/icons/save.svg'
import savedIcon from '../../../assets/icons/saved.svg'
import dot from '../../../assets/icons/dot.svg'
import tag from '../../../assets/icons/tag.svg'
import { auth, db } from '../../../Firebase'
import { setDoc, getDoc, doc, arrayUnion, arrayRemove } from 'firebase/firestore'

function Overview({ recipeId, recipeName, recipeImage, servings, dietTags, readyInMinutes }) {
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    const fetchSavedStatus = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, user.uid, 'savedRecipes');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.recipeIds.includes(recipeId)) {
            setIsSaved(true);
          }
        }
      }
    };

    fetchSavedStatus();
  }, [recipeId]);

  const handleSaveRecipe = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const docRef = doc(db, user.uid, 'savedRecipes');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.recipeIds.includes(recipeId)) {
            // in array, remove
            await setDoc(docRef, { recipeIds: arrayRemove(recipeId) }, { merge: true });
            console.log('RecipeId removed: ', recipeId);
          } else {
            // not in array, add
            await setDoc(docRef, { recipeIds: arrayUnion(recipeId) }, { merge: true });
            console.log('RecipeId added: ', recipeId);
          }
        } else {
          // doc dne create
          await setDoc(docRef, { recipeIds: [recipeId] });
          console.log('Document created with recipeId: ', recipeId);
        }

        setIsSaved((prev) => !prev);
      } catch (error) {
        console.error('Error adding or removing recipeId: ', error);
      }
    } else {
      console.error('User not authenticated.');
    }
  };

  return (
    <div>

      <div className="flex w-full m-auto justify-between h-76 flex-wrap bg-indigo-100">

        {/* Recipe Picture */}
        <img src={recipeImage} alt="Recipe picture" className="h-full lg:w-3/5 md:w-3/4 sm:w-full w-full rounded-lg" />

        {/* Recipe Title and Save Button*/}
        <div className="w-full lg:w-3/5 md:w-3/4 sm:w-full lg:mx-4 my-4 mt-10
        flex lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap">

            {/* Title */}
            <div className="flex-row lg:w-10/12 md:w-10/12 sm:w-full w-full">
              <h1 className="lg:text-5xl md:text-4xl text-xl font-bold text-header">{recipeName}</h1>
              <p className="lg:mt-6 md:mt-4 sm:mt-3 mt-3 text-body-bold 
              lg:text-xl md:text-xl sm:text-base text-base">Makes {servings} servings &emsp; | &emsp; Ready in {readyInMinutes} minutes</p>
            </div>

            {/* Save Button */}
            <div className="flex-row min-w-[20px] lg:w-3/10 md:w-2/12 sm:w-2/12 w-2/12 lg:ml-10 md:ml-0 sm:mt-5 mt-5 items-right">
              <img
                src={isSaved ? savedIcon : saveIcon}
                className="lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-8 sm:h-8 w-8 h-8 cursor-pointer"
                onClick={handleSaveRecipe}
              />
            </div>

        </div>

        {/* Labels */}
        <div className="mt-8 p-2 text-body-bold mt-12 lg:text-lg md:text-base sm:text-sm text-sm
        w-full lg:w-3/5 md:w-3/4 sm:w-full lg:mx-4 my-4 mt-10">
          <span className="leading-10 whitespace-nowrap mr-6">                
            <img src={tag} className="px-0 lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 w-6 h-6 inline" />
          </span>
          {dietTags.map((item, index) => {
            return (
              <span className="leading-10 whitespace-nowrap mr-6">
                {index !== 0 &&
                  <img src={dot} className="px-0 w-8 h-8 inline" />
                }
                <span className="whitespace-nowrap">{item}</span>
              </span>
            )
          })}
        </div>

      </div>
    </div>
  )
}
Overview.propTypes = {
  recipeName: PropTypes.string,
  recipeImage: PropTypes.string,
  servings: PropTypes.number,
  dietTags: PropTypes.array,
  readyInMinutes: PropTypes.number
}
export default Overview