import React from 'react';
import FavoriteSportAndTeam from './FavoriteItem';
import { PreferenceProvider } from '../../context/Preference/context';
// Just import the file

const LPage: React.FC = () => {
    // And use it after the h1 tag
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
                <PreferenceProvider>
                    <FavoriteSportAndTeam />
                </PreferenceProvider>
            </div>
        </div>
    );
}
export default LPage;