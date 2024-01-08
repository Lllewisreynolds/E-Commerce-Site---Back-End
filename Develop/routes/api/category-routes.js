const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories, including its associated Products
router.get('/', async (req, res) => {
  try {
    const categoriesData = await Category.findAll({
      include: [{model: Product}]
    });

    if (!categoriesData) {
      res.status(200).json({message: 'No categories found'});
      return;
    };

    res.status(200).json(categoriesData);

  } catch (err) {
    res.status(500).json(err);
  };
});

  // find one category by its `id` value, including its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categoryById) {
      res.status(200).json({message: 'No categories found'});
      return;
    };

    res.status(200).json(categoryById);

  } catch (err) {
    res.status(500).json(err);
  };
});


  // creates a new category
router.post('/', async (req, res) => {
  try {
      const newCategory = await Category.create({
        category_name: req.body.categoryName
      })
  
      res.status(200).json(newCategory);
      console.log('New category created!')
  
    } catch (err) {
      res.status(500).json(err);
    };
  });


  // update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
      const updateCategory = await Category.update({
        category_name: req.body.categoryName
      },
      {
        where: {
          id: req.params.id
        }
      });
      
      const categoryById = await Category.findByPk(req.params.id, {
        include: [{ model: Product }]
      });
  
      if (!categoryById) {
        res.status(200).json({message: 'No such category currently exists'});
        return;
      };
  
      res.status(200).json(updateCategory);
      console.log("Category successfully updated!");
  
    } catch (err) {
      res.status(500).json(err);
    };
  });


  // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
      const deleteCategory = await Category.destroy(
        {
          where: {
            id: req.params.id,
          }
        });
  
        if (!deleteCategory) {
          res.status(200).json({message: 'No such category currently exists'});
          return;
        };
  
        res.status(200).json(deleteCategory);
        console.log('Category successfully deleted!');
  
    } catch (err) {
      res.status(500).json(err);
    };
  });

module.exports = router;


