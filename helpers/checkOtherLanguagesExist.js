const checkOtherLanguagesExist = (languages) => {
    return languages && languages.some(e => !e.motherTongue);
}

export default checkOtherLanguagesExist;