// JavaScript source code
// Valid css
var css_colors = ['black', 'white', 'red', 'green', 'blue', 'yellow'];

// Icons https://pastebin.com/Y7NkTLuV 
// Icons

// Core Game Logic Interval
var Cgl_interval;

// Current Loaded Level
var Level;

// Player
var Player = {
    "score": 0,
    "score_per_tick": 1,
    "inventory": [
        { "id": "0", "count": 7 },
        { "id": "1", "count": 4 },
    ]
}

//var icons = ['e84d', 'eb3b', 'e190', 'e191', 'e192', 'e84e', 'e914', 'e84f', 'e850', 'e851', 'e853', 'e60e', 'e145', 'e439', 'e193', 'e003', 'e146', 'e147', 'e148', 'e567', 'e854', 'e39d', 'e05c', 'e39e', 'e630', 'e631', 'e632', 'e633', 'e634', 'e635', 'e636', 'e637', 'e195', 'e194', 'e055', 'eb3c', 'e855', 'e856', 'e857', 'e858', 'e019', 'eb3d', 'e90b', 'e859', 'e85a', 'e5c3', 'e149', 'e5c4', 'e5db', 'e5c5', 'e5c6', 'e5c7', 'e5c8', 'e5d8', 'e060', 'e85b', 'e85c', 'e85d', 'e85e', 'e85f', 'e860', 'e861', 'e862', 'e39f', 'e3a0', 'e226', 'e227', 'e2bc', 'e3a1', 'e863', 'e01b', 'e14a', 'e864', 'e19c', 'e1a3', 'e1a4', 'e1a5', 'e1a6', 'eb3e', 'e52d', 'e14b', 'e1a7', 'e60f', 'e1a8', 'e1a9', 'e1aa', 'e3a2', 'e3a3', 'e3a4', 'e3a5', 'e865', 'e866', 'e867', 'e228', 'e229', 'e22a', 'e22b', 'e22c', 'e22d', 'e22e', 'e22f', 'e230', 'e231', 'e232', 'e233', 'e06b', 'e3a6', 'e3a7', 'e3a8', 'e3a9', 'e3aa', 'e3ab', 'e3ac', 'e1ab', 'e1ac', 'e1ad', 'e1ae', 'e3ad', 'e3ae', 'e6dd', 'e868', 'e869', 'e43c', 'e0af', 'eb3f', 'e86a', 'e7e9', 'e0b0', 'e0b1', 'e0b2', 'e0b3', 'e0b4', 'e0e4', 'e0b5', 'e0b6', 'e06c', 'e3af', 'e3b0', 'e8fc', 'e3b1', 'e3b2', 'e3b3', 'e5c9', 'e8f6', 'e8f7', 'e8f8', 'eb40', 'e307', 'e308', 'e3b4', 'e3b5', 'e86b', 'e0b7', 'e0ca', 'e0cb', 'e5ca', 'e834', 'e835', 'e86c', 'e5cb', 'e5cc', 'eb41', 'eb42', 'e86d', 'e86e', 'e14c', 'e0b8', 'e5cd', 'e01c', 'e2bd', 'e2be', 'e2bf', 'e2c0', 'e2c1', 'e2c2', 'e2c3', 'e86f', 'e3b6', 'e431', 'e3b7', 'e3b8', 'e0b9', 'e3b9', 'e915', 'e30a', 'e638', 'e0d0', 'e0cf', 'e0ba', 'e14d', 'e14e', 'e14f', 'e3ba', 'e3bb', 'e90c', 'e150', 'e2cc', 'e870', 'e3be', 'e3bc', 'e3bd', 'e3bf', 'e3c0', 'e3c1', 'e3c2', 'e3c3', 'e3c4', 'e3c5', 'e437', 'e3c6', 'e871', 'e1af', 'e916', 'e3c7', 'e872', 'e92b', 'e16c', 'e873', 'e30b', 'e30c', 'e3c8', 'e30d', 'e1b0', 'e335', 'e1b1', 'e337', 'e0bb', 'e0bc', 'e52e', 'e52f', 'e532', 'e530', 'e531', 'e534', 'e566', 'e533', 'e535', 'e536', 'e610', 'e875', 'e612', 'e611', 'e643', 'e644', 'e30e', 'e7ee', 'e876', 'e877', 'e917', 'e918', 'e151', 'e25d', 'e613', 'e1b2', 'e3c9', 'e568', 'e8fb', 'e0be', 'e63f', 'e01d', 'e000', 'e001', 'e926', 'e56d', 'e878', 'e614', 'e615', 'e616', 'e903', 'e879', 'e5ce', 'e5cf', 'e01e', 'e87a', 'e3ca', 'e3cb', 'e3cc', 'e3cd', 'e3ce', 'e3cf', 'e87b', 'e87c', 'e01f', 'e020', 'e87d', 'e87e', 'e06d', 'e06e', 'e87f', 'e05d', 'e061', 'e05e', 'e06a', 'e062', 'e2c4', 'e2c6', 'e3d3', 'e3d0', 'e3d1', 'e3d2', 'e3d4', 'e3d5', 'e3d6', 'e3d7', 'e3d8', 'e3d9', 'e3da', 'e3db', 'e3dc', 'e3dd', 'e3de', 'e3df', 'e152', 'e3e0', 'e3e2', 'e3e3', 'e880', 'e881', 'e90d', 'e5dc', 'eb43', 'e153', 'e3e4', 'e3e5', 'e3e6', 'e3e7', 'e539', 'e904', 'e905', 'e3e8', 'e882', 'e883', 'e2c7', 'e2c8', 'e2c9', 'e617', 'e167', 'e234', 'e235', 'e236', 'e237', 'e238', 'e239', 'e23a', 'e23b', 'e23c', 'e23d', 'e23e', 'e23f', 'e240', 'e241', 'e242', 'e243', 'e244', 'e25e', 'e245', 'e246', 'e247', 'e248', 'e249', 'e0bf', 'e154', 'e056', 'e057', 'e058', 'eb44', 'e5d0', 'e5d1', 'e24a', 'e927', 'e30f', 'e021', 'e90e', 'e155', 'e884', 'e908', 'eb45', 'e1b3', 'e1b4', 'e1b5', 'e885', 'e3e9', 'e3ea', 'e1b8', 'e3eb', 'e3ec', 'e7ef', 'e7f0', 'e886', 'e052', 'e3ed', 'e3ee', 'e3f1', 'e3f2', 'e310', 'e311', 'e3f3', 'e023', 'e887', 'e8fd', 'e024', 'e25f', 'e888', 'e889', 'e88a', 'eb46', 'e53a', 'e88b', 'e88c', 'e902', 'e88d', 'e3f4', 'e3f5', 'e0e0', 'e0c3', 'e912', 'e156', 'e909', 'e88e', 'e88f', 'e890', 'e24b', 'e24c', 'e24d', 'e24e', 'e24f', 'e250', 'e251', 'e891', 'e0c4', 'e3f6', 'e312', 'e313', 'e314', 'e315', 'e316', 'e317', 'e318', 'e31a', 'e31b', 'e31c', 'e31d', 'eb47', 'e892', 'e893', 'e3f7', 'e894', 'e31e', 'e31f', 'e320', 'e321', 'e5dd', 'e895', 'e53b', 'e53c', 'e3f8', 'e3f9', 'e3fa', 'e02e', 'e02f', 'e030', 'e90f', 'e919', 'e91a', 'e260', 'e157', 'e438', 'e896', 'e0c6', 'e639', 'e53f', 'e53d', 'e53e', 'e540', 'e541', 'e542', 'e543', 'e556', 'e544', 'e545', 'e546', 'e547', 'e548', 'e549', 'e54a', 'e54b', 'e54c', 'e54d', 'e54e', 'e54f', 'e550', 'e551', 'e552', 'e553', 'e554', 'e555', 'e557', 'e558', 'e559', 'e7f1', 'e1b6', 'e0c7', 'e0c8', 'e1b7', 'e897', 'e898', 'e899', 'e3fc', 'e3fb', 'e3fd', 'e3fe', 'e3ff', 'e400', 'e401', 'e028', 'e402', 'e16d', 'e89a', 'e158', 'e0e1', 'e55b', 'e159', 'e89b', 'e322', 'e5d2', 'e252', 'e0c9', 'e029', 'e02a', 'e02b', 'e618', 'e253', 'e254', 'e263', 'e25c', 'e403', 'e7f2', 'e7f3', 'e619', 'e5d3', 'e5d4', 'e91b', 'e323', 'e168', 'e02c', 'e404', 'e43a', 'e6df', 'e405', 'e063', 'e55c', 'e406', 'e407', 'e408', 'e409', 'e55d', 'e569', 'e1b9', 'e640', 'e61a', 'e1ba', 'e031', 'e16a', 'e1bb', 'e641', 'e0cc', 'e033', 'e06f', 'e89c', 'e7f4', 'e7f7', 'e7f5', 'e7f6', 'e7f8', 'e90a', 'e63a', 'e91c', 'e89d', 'e89e', 'e89f', 'e7f9', 'e8a0', 'e40a', 'e925', 'e40b', 'e40c', 'e40d', 'e40e', 'e40f', 'e7fa', 'e034', 'e035', 'e036', 'e8a1', 'e7fb', 'e7fc', 'e8a2', 'e8a3', 'e8a4', 'e8a5', 'e8a6', 'e8a7', 'e8a8', 'e8a9', 'e7fd', 'e7fe', 'e7ff', 'e55a', 'e56a', 'e63b', 'e91d', 'e0cd', 'e324', 'e61b', 'e61c', 'e61d', 'e325', 'e61e', 'e61f', 'e620', 'e326', 'e0db', 'e0dc', 'e327', 'e0dd', 'e0de', 'e410', 'e411', 'e412', 'e43b', 'e413', 'e432', 'e433', 'e434', 'e415', 'e8aa', 'e911', 'e6c4', 'e6c5', 'e55e', 'e55f', 'e037', 'e038', 'e039', 'e906', 'e03b', 'e065', 'e05f', 'e800', 'e801', 'e8ab', 'eb48', 'e0ce', 'e416', 'e63c', 'e336', 'e8ac', 'e91e', 'e0df', 'e8ad', 'e645', 'e80b', 'e255', 'e8ae', 'e8af', 'e03c', 'e03d', 'e066', 'e03e', 'e837', 'e836', 'e560', 'e8b0', 'e03f', 'e91f', 'e8b1', 'e15a', 'e5d5', 'e15b', 'e15c', 'e15d', 'e067', 'e417', 'e928', 'e8fe', 'e040', 'e041', 'e042', 'e059', 'e05a', 'e05b', 'e15e', 'e15f', 'e160', 'e8b2', 'e56c', 'e561', 'e8b3', 'e929', 'e0d1', 'e8b4', 'eb49', 'e418', 'e419', 'e41a', 'e920', 'e328', 'e921', 'e0e5', 'e642', 'e562', 'e161', 'e329', 'e8b5', 'e80c', 'e1be', 'e1bf', 'e1c0', 'e1c1', 'e0e2', 'e623', 'e1c2', 'e8b6', 'e32a', 'e162', 'e163', 'e811', 'e812', 'e813', 'e814', 'e815', 'e8b8', 'e8b9', 'e8ba', 'e8bb', 'e8bd', 'e8bc', 'e8be', 'e8bf', 'e8c0', 'e8c1', 'e8c2', 'e8c3', 'e8c4', 'e8c5', 'e8c6', 'e8c7', 'e1c3', 'e8c8', 'e80d', 'e8c9', 'e8ca', 'e8cb', 'e8cc', 'e261', 'e6e1', 'e043', 'e1c8', 'e1cd', 'e1ce', 'e1cf', 'e1d0', 'e1d8', 'e1d9', 'e1da', 'e32b', 'e624', 'e044', 'e045', 'e41b', 'e068', 'e32c', 'eb4a', 'eb4b', 'e625', 'e626', 'e046', 'e164', 'e053', 'eb4c', 'e256', 'e32d', 'e32e', 'e8cd', 'e92a', 'e0d2', 'e8ce', 'e838', 'e83a', 'e839', 'e8d0', 'e0d3', 'e0d4', 'e0d5', 'e0d6', 'e047', 'e0e3', 'e1db', 'e8d1', 'e563', 'e41c', 'e56e', 'e257', 'e41d', 'e5d9', 'e5da', 'e8d2', 'e064', 'e048', 'e56f', 'e8d3', 'e049', 'e0d7', 'e8d4', 'e8d5', 'e8d6', 'e41e', 'e41f', 'e627', 'e628', 'e629', 'e62a', 'e8d7', 'e8d8', 'e8d9', 'e32f', 'e330', 'e331', 'e420', 'e62b', 'e564', 'e262', 'e165', 'e0d8', 'e421', 'e8da', 'e8db', 'e8dc', 'e8dd', 'e62c', 'e422', 'e922', 'e425', 'e423', 'e424', 'e426', 'e264', 'e8de', 'e8df', 'e8e0', 'e427', 'e913', 'e332', 'e8e1', 'e565', 'e570', 'e571', 'e572', 'e428', 'e8e2', 'e8e3', 'e8e4', 'e8e5', 'e429', 'e8e6', 'e8e7', 'e333', 'e169', 'e166', 'e5d6', 'e5d7', 'e923', 'e1e0', 'e8e8', 'e258', 'e259', 'e25a', 'e62d', 'e070', 'e071', 'e04a', 'e04b', 'e04c', 'e338', 'e8e9', 'e8ea', 'e8eb', 'e8ec', 'e42a', 'e42b', 'e8ed', 'e8ee', 'e8ef', 'e8f0', 'e8f1', 'e8f2', 'e8f3', 'e435', 'e8f4', 'e8f5', 'e62e', 'e0d9', 'e04d', 'e04e', 'e04f', 'e050', 'e0da', 'e62f', 'e1bc', 'e002', 'e334', 'e924', 'e42c', 'e42d', 'e42e', 'e436', 'e430', 'e63d', 'e051', 'e069', 'e16b', 'e80e', 'e1bd', 'e63e', 'e1e1', 'e1e2', 'e8f9', 'e25b', 'e8fa', 'e8ff', 'e900', 'e56b'];
