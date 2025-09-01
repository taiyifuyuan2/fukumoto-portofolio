class Admin::SkillsController < ApplicationController
  layout 'admin'
  before_action :set_skill, only: [:show, :edit, :update, :destroy]

  def index
    @skills = Skill.all.order(:category, :name)
  end

  def show
  end

  def new
    @skill = Skill.new
  end

  def create
    @skill = Skill.new(skill_params)
    if @skill.save
      redirect_to admin_skills_path, notice: 'スキルが正常に作成されました。'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @skill.update(skill_params)
      redirect_to admin_skills_path, notice: 'スキルが正常に更新されました。'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @skill.destroy
    redirect_to admin_skills_path, notice: 'スキルが正常に削除されました。'
  end

  private

  def set_skill
    @skill = Skill.find(params[:id])
  end

  def skill_params
    params.require(:skill).permit(:name, :description, :category, :proficiency, :icon)
  end
end
