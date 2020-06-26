import users from '../users.js'
import axios from 'axios'

jest.mock('axios')

describe('users', function () {
    beforeEach(() => {
        axios.mockClear()
    })
    const fakeResponse = [{ name: 'John Doe'}]
    it('should return last user', async () => {
        axios.get.mockResolvedValue({ data: fakeResponse})
        expect(await users.getLastUserName()).toBe('John Doe')
    })

    it('should return last user with fetch', async () => {
        fetch.mockResponseOnce(JSON.stringify(fakeResponse))
        expect(await users.getLastUserNameFetch()).toBe('John Doe')
    })
})