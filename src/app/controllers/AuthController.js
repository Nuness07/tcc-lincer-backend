class AuthController {
  index(req, res) {
    const { email, password } = req.body;

    if (email !== 'admin@admin.com' && password !== 'admin') {
      return res.status(400).json({
        error: true,
        message: 'Usuário não autenticado!',
      });
    }

    return res.status(200).json({
      user: {
        email,
        password,
      },
    });
  }
}

module.exports = new AuthController();
