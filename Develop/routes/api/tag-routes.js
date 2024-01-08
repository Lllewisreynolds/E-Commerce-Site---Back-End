const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags, including its associated Product data

router.get('/', async (req, res) => {
  try {
      const tagData = await Tag.findAll({
        include: [{ model: Product }]
      });
      if (!tagData) {
        res.status(200).json({message: 'No such tags currently exist'});
        return;
      }
      res.json(tagData); 
    } catch (err) {
      res.status(500).json(err);
    }
  });

// find a single tag by its `id`, including its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tagById) {
      res.status(200).json({message: 'No such tag currently exists'});
      return;
    };

    res.status(200).json(tagById);

  } catch (err) {
    res.status(500).json(err);
  }
});


// create a new tag
router.post('/', async (req, res) => {
  try {
      const newTag = await Tag.create({
        tag_name: req.body.tagName
      });
  
      res.status(200).json(newTag);
      console.log('New tag created!');
  
    } catch (err) {
      res.status(500).json(err);
    }
  });


// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update({
      tag_name: req.body.tagName
    },
    {
      where: {
        id: req.params.id
      }
    });
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!tagById) {
      res.status(200).json({message: 'No such tag currently exists'});
      return;
    };

    res.status(200).json(updateTag);
    console.log('Tag successfully updated!');
    
  } catch (err) {
    res.status(500).json(err);
  }
});

  // delete on tag by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const deleteTag = await Tag.destroy({
        where: {
          id: req.params.id
        }
      });
      if (!deleteTag) {
        res.status(200).json({message: 'No such tag currently exists'});
        return;
      }
  
      res.status(200).json(deleteTag);
      console.log('Tag successfully deleted!');
      
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;