using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Maintain_notes.Models
{
    public class Note
    {
        [Key]
        public int Id { get; set; }

        public string Value { get; set; }
    }
    public class MaintainNotes : DbContext
    {
        public MaintainNotes()
            : base("name=MaintainNotes")
        {
            base.Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
        }
     

        public virtual DbSet<Note> Notes { get; set; }
        
    }
}
