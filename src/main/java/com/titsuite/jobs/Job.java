package com.titsuite.jobs;

import java.util.Date;

public class Job {
   protected int id;
   protected int refFreelancer;
   protected Date period;
   protected int refRate;
   protected int refOffer;



   public Job(int id, int refFreelancer, Date period, int refRate, int refOffer) {
      this.id = id;
      this.refFreelancer = refFreelancer;
      this.period = period;
      this.refRate = refRate;
      this.refOffer = refOffer;
   }

   public int getId() {
      return id;
   }

   public int getRefFreelancer() {
      return refFreelancer;
   }

   public Date getPeriod() {
      return period;
   }

   public int getRefRate() {
      return refRate;
   }

   public int getRefOffer() {
      return refOffer;
   }

   public void setId(int id) {
      this.id = id;
   }

   public void setRefFreelancer(int refFreelancer) {
      this.refFreelancer = refFreelancer;
   }

   public void setPeriod(Date period) {
      this.period = period;
   }

   public void setRefRate(int refRate) {
      this.refRate = refRate;
   }

   public void setRefOffer(int refOffer) {
      this.refOffer = refOffer;
   }
}
