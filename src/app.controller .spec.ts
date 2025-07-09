import { AppController } from "./app.controller";

describe('AppController', () => {     
  describe('listar', () => {
    it('should return an array of users', () => {
      // Mock the UserService and its listar method
      const mockUserService = {
        listar: jest.fn().mockReturnValue([{ nome: 'John Doe', id: 1 }]),
        userModel: {},
        remove: jest.fn(),
        criar: jest.fn(),
      };


      const appController = new AppController(mockUserService as any);

      expect(appController.listar()).toEqual([{ nome: 'John Doe', id: 1 }]);
    });
  });
});
