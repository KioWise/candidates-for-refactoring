
// Создал отдельный interface для пользователя с данными. Упростит работу с огромным количеством кода
interface UsersStorage {
  name: string,
  age: number,
  address: string,
  phoneNumber: string,
  email: string,
  role: string,
  isActive: boolean,
  isVerified: boolean,
  isPremium: boolean,
  lastLogin: Date,
  registrationDate: Date,
  profilePicture: string,
  bio: string,
  interests: string[]
}

class User {
  private user: UsersStorage;

  // Убрал не нужные параметры, теперь в constructor нужно передать полноценного пользователя, это делает код чище, проще воспринимать.
  constructor(userData: UsersStorage) {
    // Запись пользователя можно сделать так, либо ещё уменьшить код и сделать через перебор имен по циклу for(let field in userData){....}
    this.user = {
      name: userData.name,
      age: userData.age,
      address: userData.address,
      phoneNumber: userData.phoneNumber,
      email: userData.email,
      role: userData.role,
      isActive: userData.isActive,
      isVerified: userData.isVerified,
      isPremium: userData.isPremium,
      lastLogin: userData.lastLogin,
      registrationDate: userData.registrationDate,
      profilePicture: userData.profilePicture,
      bio: userData.bio,
      interests: userData.interests,
    }
  }

  // ... (other methods)
}
