class UserRepository {
  findAll() {
    return [
      { id: 1, name: "Jean Cigoli" },
      { id: 2, name: "Marcos" },
    ];
  }
}

class UserController {
  private userRepository!: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  findAll() {
    return this.userRepository.findAll();
  }
}

const userRepository = new UserRepository();
const userController = new UserController(userRepository);

const allUser = userController.findAll();

console.log(allUser);
